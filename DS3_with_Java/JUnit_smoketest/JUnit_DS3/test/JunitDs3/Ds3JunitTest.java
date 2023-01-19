/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JunitDs3;

import com.appvance.enterprise.charting.FunctionalReport.NodeReport;
import com.appvance.enterprise.charting.FunctionalTestcaseExecution;
import com.appvance.enterprise.tests.connection.ScenarioExecuter;

import org.junit.Assert;
import org.junit.Test;

/**
 *
 * @author aishw
 */
public class Ds3JunitTest {
    
   

    /**
     * @param args the command line arguments
     */
    @Test
    public void testMain() throws Exception {
        // TODO code application logic here
       
         ScenarioExecuter connection = new ScenarioExecuter();
         String monthlyPrice = "5,350";
        try {
            String scenarioDir = "scenarios/poc.scenario";
            connection.executeScenario(scenarioDir);
            NodeReport nr = connection.getNodeReport();
            Assert.assertEquals("Transactions", 1, nr.transactions.size());
            FunctionalTestcaseExecution ft = nr.transactions.get(0);
            if (!ft.success) {
                System.out.println("Failure:\n" + ft.failure + "\n" + ft.error);
            }
            Assert.assertEquals("Success", true, ft.success);
            for(int i= 0;i < ft.steps.size();i++){
              System.out.println("steps : " + i + ":" + ft.steps.get(i).name);
            }
            Assert.assertEquals("Step name", "1.4) Log("+ monthlyPrice +")", ft.steps.get(3).name);
        } finally {
            connection.closeConnections();
        }
    }
    
}
    
    
    

