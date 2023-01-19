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
import com.appvance.enterprise.tmclient.TMClient;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import org.json.JSONArray;

/**
 *
 * @author Daniel
 */
public class APCTestConnection extends EnableSmokeTestSystem {

    private NodeReport node;
    private TMClient client;
    private HashMap<String, IterationReport> iterationReports;
    private String hostName;

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
        System.out.println("\n---------- Sending Resources ----------");
        System.out.println("Scenario dir: " + scenarioDir);
        SetLoggingLevel.setLoggingLevel();
        System.out.println("Test loggin data disabled");
        ResourceLocator locator;
        locator = new FileResourceLocator();
        locator.setScenarioLocation(UTPCredentials.getUsername(),scenarioDir);
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
        URL url = new URL(scenario.testnodes.get(0).url);
        System.out.println("Find the Test reports at:\n" + getAnalizeUrl(
                url.getProtocol() + "://" + url.getHost() + ":" + url.getPort()));
        client.setupScenario();
        for (int i = 0; i < scenario.iterations.size(); i++) {
            client.executeIteration(i);
        }
        client.teardownScenario();
        FunctionalReport report = client.getFunctionalReport(4);
        iterationReports = report.reports;
        IterationReport ir = iterationReports.get(scenario.iterations.get(0).name);
        node = ir.reports.get(hostName);
        return scenario;
    }
/**
     * Return the execution node report, returns null if empty
     *
     * @return
     */
    public ArrayList<SummaryManager>  getSummary() {
        return client.getSummary();
    }
    /**
     * Return the execution node report, returns null if empty
     *
     * @return
     */
    public HashMap<String, IterationReport> getIterationReports() {
        return iterationReports;
    }

    /**
     * Return the execution node report, returns null if empty
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
