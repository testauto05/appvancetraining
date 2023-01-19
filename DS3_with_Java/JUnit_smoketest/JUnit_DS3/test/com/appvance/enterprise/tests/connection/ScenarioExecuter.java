/**
 * ***********************************************************************
 *
 * Appvance Inc. Confidential __________________
 *
 * Copyright 2020 Appvance Inc. All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains the property of
 * Appvance Incorporated and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Appvance Inc. and its
 * suppliers and may be covered by U.S. and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law. Dissemination of this
 * information or reproduction of this material is strictly forbidden unless
 * prior written permission is obtained from Appvance Incorporated.
 *
 * This file is subject to the terms and conditions defined in file
 * 'LICENSE.txt', which is part of this source code package.
 */
package com.appvance.enterprise.tests.connection;

import com.appvance.enterprise.charting.FunctionalReport;
import com.appvance.enterprise.charting.FunctionalReport.IterationReport;
import com.appvance.enterprise.charting.FunctionalReport.NodeReport;
import com.appvance.enterprise.executer.ScenariosInitException;
import com.appvance.enterprise.executer.SummaryManager;
import com.appvance.enterprise.scenario.FileResourceLocator;
import com.appvance.enterprise.scenario.ResourceLocator;

import com.appvance.enterprise.scenario.Scenario;
import com.appvance.enterprise.scenarioeditor.ConsoleBrokenScenarioListener;
import com.appvance.enterprise.tests.SetLoggingLevel;
import com.appvance.enterprise.tests.client.EnableSmokeTestSystem;
import com.appvance.enterprise.tmclient.ConsoleScenarioListener;
import com.appvance.enterprise.tmclient.DefaultTMClient;
import com.appvance.enterprise.tmclient.ReqResInfo;
import com.appvance.enterprise.tmclient.TMClient;
import com.appvance.enterprise.tmclient.TestcaseExecutionInfo;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author Daniel
 */
public class ScenarioExecuter {

    private final HashMap<String, ArrayList<SummaryManager>> summaries = new HashMap<>();

    private NodeReport node;
    private TMClient client;
    private HashMap<String, IterationReport> iterationReports = new HashMap<>();
    private String hostName;
    private ArrayList<TXFullDetails> fullTxDetails;
    private long executionID;

    public long getExecutionID() {
        return executionID;
    }

    public void setExecutionID(long executionID) {
        this.executionID = executionID;
    }

    public static class TXFullDetails {

        public TestcaseExecutionInfo info;
        public static ArrayList<ReqResInfo> requests;
        public static String output;
        public static String error;
        public JSONObject integrations;

        public TXFullDetails(TestcaseExecutionInfo theInfo, ArrayList<ReqResInfo> theTXRequest, String theOutput, String theError) {
            info = theInfo;
            requests = theTXRequest;
            output = theOutput;
            error = theError;
        }
    }

    public String getAnalizeUrl(String url) throws Exception {
        url += "/UI/testcasecount.html?config=default&exeId=" + client.getExecutionID();
        return url;
    }

    /**
     * @param scenarioDir
     * @return
     * @Description This method sets up the scenario resources and assign the
     * proper values to the TMClient so it can perform the execution of the
     * scenario.
     * @throws ScenariosInitException
     */
    public Scenario executeScenario(String scenarioDir) throws ScenariosInitException, Exception {
        return executeScenario(scenarioDir, 0);
    }

    public Scenario executeScenario(String scenarioDir, int testcases) throws ScenariosInitException, Exception {
        return executeScenario(scenarioDir, testcases, false);
    }

    public Scenario executeScenario(String scenarioDir, int testcases, boolean integrations) throws ScenariosInitException, Exception {
        System.out.println("\n---------- Sending Resources ----------");
        System.out.println("Scenario dir: " + scenarioDir);
        SetLoggingLevel.setLoggingLevel();
        System.out.println("Test loggin data disabled");
        ResourceLocator locator;
        locator = new FileResourceLocator();
        locator.setScenarioLocation("appvance", scenarioDir);
        client = new DefaultTMClient(locator);
        client.addBrokenScenarioListener(new ConsoleBrokenScenarioListener());
        Scenario scenario = client.setScenario(scenarioDir, UTPCredentials.getUsername(), UTPCredentials.getPassword(),new JSONArray());

        hostName = scenario.testnodes.get(0).name;
        System.out.println("TestNode:\n  " + hostName + "\n  "
                + scenario.testnodes.get(0).url);
        client.addScenarioListener(new ConsoleScenarioListener(true));
        client.connectToTestnodes();
        client.sendResources();
        System.out.println("\nExecution id " + client.getExecutionID());
        this.setExecutionID(client.getExecutionID());
        URL url = new URL(scenario.testnodes.get(0).url);
        System.out.println("Find the Test reports at:\n" + getAnalizeUrl(
                url.getProtocol() + "://" + url.getHost() + ":" + url.getPort()));
        client.setupScenario();
        for (int i = 0; i < scenario.iterations.size(); i++) {
            //System.out.println("\nEXECUTING ITER "+i+"   ("+scenario.iterations.get(i).name+")");
            client.executeIteration(i);
            summaries.put(scenario.iterations.get(i).name, client.getSummary());
        }
        if (testcases > 0) {
            fullTxDetails = new ArrayList<>();
            for (TestcaseExecutionInfo txDetail : client.getLatestTestcaseExecutions(testcases)) {
                int txExecId = txDetail.testcaseExecutionId;
                TXFullDetails details = new TXFullDetails(txDetail, client.getRequestResponse(txExecId),
                        client.getTXOuput(txExecId), client.getTXError(txExecId));
                if(integrations){
                    details.integrations = client.getIntegrations(txExecId, "Script");
                }
                fullTxDetails.add(details);
            }
            System.out.println("Added tx details for " + fullTxDetails.size() + " transactions");
        }
        client.teardownScenario();
        FunctionalReport report = client.getFunctionalReport(4);
        iterationReports = report.reports;
        IterationReport ir = iterationReports.get(scenario.iterations.get(0).name);
        node = ir.reports.get(hostName);
        return scenario;
    }
    
    public  ArrayList<TestcaseExecutionInfo> getTestcaseExecutions() {
        return client.getTestcaseExecutions();
    }
    
    public ArrayList<TXFullDetails> getTxDetails() {
        return fullTxDetails;
    }

    /**
     * Returns the execution node report, returns null if empty
     *
     * @return
     */
    public ArrayList<SummaryManager> getSummary() {
        return client.getSummary();
    }

    /**
     * Returns the execution node report, returns null if empty
     *
     * @return
     */
    public HashMap<String, ArrayList<SummaryManager>> getSummaries() {
        return summaries;
    }

    /**
     * Returns the execution node report, returns null if empty
     *
     * @return
     */
    public HashMap<String, IterationReport> getIterationReports() {
        return iterationReports;
    }

    /**
     * Returns the execution node report, returns null if empty
     *
     * @return
     */
    public NodeReport getNodeReport() {
        return node;
    }

    public String getHostName() {
        return hostName;
    }

    /**
     * Releases the execution connections
     *
     * @throws ScenariosInitException
     */
    public void closeConnections() throws ScenariosInitException {
        client.release();
    }
}//end class
