/*
 * Copyright (C) 2015 Daniel Guzmán 
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package com.appvance.enterprise.tests.connection;

import com.appvance.enterprise.tests.client.EnableSmokeTestSystem;
import java.io.File;
import java.io.FileInputStream;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Daniel
 */
public class UTPCredentials extends EnableSmokeTestSystem {

    private static final String DNSName;
    private static final String Username;
    private static final String Password;
    private static final String Database;

    static {
        Properties properties = new Properties();
        try {            
            File file = new File("./localhost/config.properties");
            properties.load(new FileInputStream(file));
        } catch (Exception e) {
            e.printStackTrace();
        }
        DNSName = properties.getProperty("DNS", "http://localhost:8080/");
        Username = properties.getProperty("Username", "appvance");
        Password = properties.getProperty("Password", "appvance");
        Database = properties.getProperty("Database", "jdbc:mysql://localhost:3306/aiq");
    }

    /**
     * @return DNS_NAME
     */
    public static String getDNSName() {
        try {
            return "http://"+InetAddress.getLocalHost().getHostAddress()+":8080/";
        } catch (UnknownHostException ex) {
            ex.printStackTrace();
            return DNSName;
        }
    }

    /**
     *
     * @return
     */
    public static String getUsername() {
        return Username;
    }

    /**
     *
     * @return
     */
    public static String getPassword() {
        return Password;
    }
    /**
     *
     * @return
     */
    public static String getDatabase() {
        return Database;
    }

}
