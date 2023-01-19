/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.appvance.ds.netx.pdf;

import com.appvance.ds.client.Configuration;
import com.appvance.ds.ivy.DS3IvyRunner;
import com.appvance.ivy.IvyTestRunner;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 *
 * @author appvance
 */
@RunWith(IvyTestRunner.class)
public class PDFNetxTest {
    
    @Test
    public void doTest()throws Exception{
        DS3IvyRunner runner = new DS3IvyRunner("Chrome",Configuration.baseURL );
        runner.execute("/test/com/appvance/ds/netx/pdf/DPFTest.js");
        
    }
    
    @Test
    public void doTestWithHistory()throws Exception{
        DS3IvyRunner runner = new DS3IvyRunner("Chrome",Configuration.baseURL );
        runner.execute("/test/com/appvance/ds/netx/pdf/DSLog.zip","/test/com/appvance/ds/netx/pdf/DPFTest.js");
        
    }
}
