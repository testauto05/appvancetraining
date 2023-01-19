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
package com.appvance.enterprise.tests;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;

/**
 *
 * @author Desktop
 */
public class SetLoggingLevel {

    public static void setLoggingLevel() {
        Logger.getLogger(org.appvance.hibernate.cfg.Environment.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.Configuration.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.util.DTDEntityResolver.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.AnnotationConfiguration.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.persister.entity.AbstractEntityPersister.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.SettingsFactory.class).setLevel(Level.ERROR);
        Logger.getLogger(com.mchange.v2.c3p0.management.DynamicPooledDataSourceManagerMBean.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.impl.SessionFactoryImpl.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.impl.SessionImpl.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.annotations.QueryBinder.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.AnnotationBinder.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.annotations.PropertyBinder.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.Ejb3Column.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.persister.collection.AbstractCollectionPersister.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.loader.entity.EntityLoader.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.loader.collection.OneToManyLoader.class).setLevel(Level.ERROR);
        Logger.getLogger("org.appvance.hibernate.SQL").setLevel(Level.ERROR);
        Logger.getLogger(com.mchange.v2.c3p0.stmt.GooGooStatementCache.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.transaction.JDBCTransaction.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.pretty.Printer.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.event.def.AbstractFlushingEventListener.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.loader.Loader.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.jdbc.AbstractBatcher.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.engine.TwoPhaseLoad.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.engine.StatefulPersistenceContext.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.id.IdentifierGeneratorFactory.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.CollectionSecondPass.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.annotations.CollectionBinder.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.annotations.TableBinder.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.CollectionSecondPass.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.annotations.SimpleValueBinder.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.annotations.Version.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.search.SearchConfiguration.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.cfg.annotations.EntityBinder.class).setLevel(Level.ERROR);
        Logger.getLogger("com.mchange.v2.resourcepool.BasicResourcePool").setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.connection.C3P0ConnectionProvider.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.impl.SessionFactoryObjectFactory.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.event.def.AbstractSaveEventListener.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.connection.ConnectionProviderFactory.class).setLevel(Level.ERROR);
        Logger.getLogger(com.mchange.v2.log.MLog.class).setLevel(Level.ERROR);
        Logger.getLogger(com.mchange.v2.c3p0.C3P0Registry.class).setLevel(Level.ERROR);
        Logger.getLogger(com.mchange.v2.c3p0.impl.AbstractPoolBackedDataSource.class).setLevel(Level.ERROR);
        Logger.getLogger(com.mchange.v2.c3p0.impl.C3P0PooledConnectionPool.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.dialect.Dialect.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.transaction.TransactionFactoryFactory.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.transaction.TransactionManagerLookupFactory.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.jdbc.ConnectionManager.class).setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.engine.Collections.class).setLevel(Level.ERROR);
        Logger.getLogger("org.apache.appvance434.http.wire").setLevel(Level.ERROR);
        Logger.getLogger("org.apache.appvance434.http.headers").setLevel(Level.ERROR);
        Logger.getLogger(org.appvance.hibernate.engine.loading.CollectionLoadContext.class).setLevel(Level.ERROR);
        Logger.getLogger(org.apache.appvance434.http.impl.conn.PoolingHttpClientConnectionManager.class).setLevel(Level.ERROR);
        Logger.getLogger(org.apache.appvance434.http.impl.conn.DefaultManagedHttpClientConnection.class).setLevel(Level.ERROR);
        Logger.getLogger(org.apache.appvance434.http.client.protocol.RequestAddCookies.class).setLevel(Level.ERROR);
        Logger.getLogger(org.apache.appvance434.http.impl.execchain.MainClientExec.class).setLevel(Level.ERROR);
        Logger.getLogger(org.apache.appvance434.http.client.protocol.RequestAuthCache.class).setLevel(Level.ERROR);                
        Logger.getLogger("org.apache.appvance434.http.impl.conn.HttpClientConnectionOperator").setLevel(Level.ERROR);
        Logger.getLogger(org.apache.appvance434.http.client.protocol.RequestAuthCache.class).setLevel(Level.ERROR);
        Logger.getLogger(com.mchange.v2.c3p0.impl.NewPooledConnection.class).setLevel(Level.ERROR);
        Logger.getLogger(com.mchange.v2.async.ThreadPoolAsynchronousRunner.class).setLevel(Level.ERROR);
        Logger.getLogger(com.mchange.v2.c3p0.management.ActiveManagementCoordinator.class).setLevel(Level.ERROR);

    }
}
