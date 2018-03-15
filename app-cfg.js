/*
 * Activiti Modeler component part of the Activiti project
 * Copyright 2005-2014 Alfresco Software, Ltd. All rights reserved.
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.

 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */
'use strict';

var ACTIVITI = ACTIVITI || {};

ACTIVITI.CONFIG = {
    // 'contextRoot' : './activiti-explorer/service',
    // 'contextRoot' : 'http://activiti.ooad.io/activiti-rest/service',
    'contextRoot' : './resources',
    ngAppConfig : function($httpProvider){
        // $httpProvider.defaults.headers.common = { 
        //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //     'Accept': 'application/json',
        //     'from': 'admin',
        //     "Authorization": "Bearer " + window.getQueryString("token")
        // };
    },
    httpSaveHeaders:{
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};


// window.globalHost = '172.16.1.27'
// window.globalHost = 'bpm.yyang.io'
window.globalHost = 'http://172.16.1.178:9001'// original
// window.globalHost = 'http://172.16.1.178/~RogersMac/webapp' //本地调试 公司
// window.globalHost = 'http://localhost/~RogersMac/webapp' //本地调试 家里



