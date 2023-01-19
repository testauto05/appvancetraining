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
package com.appvance.enterprise.tests.client;

import com.appvance.enterprise.tmclient.DatabaseManager;
import com.appvance.enterprise.tmclient.DefaultTMClient;
import org.junit.BeforeClass;

/** 
 *
 * @author appvance
 */
public class EnableSmokeTestSystem {

    @BeforeClass
    public static void enableSmokeTest() throws Exception {
        DatabaseManager.MaxConsoleConnections=1;
        //System.out.println("Setting Smoke Test Environment");
        DefaultTMClient.smokeTestingMode=true;
    }
}
