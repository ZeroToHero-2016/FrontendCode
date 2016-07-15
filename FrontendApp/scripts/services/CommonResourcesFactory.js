'use strict';

hrApp.factory('CommonResourcesFactory', function() {
        var baseUrl = "http://hrapp-zth.rhcloud.com/hrapp/";
        return {
            findAllDepartmentsUrl: baseUrl + "departments",
            findAllEmployeesUrl: baseUrl + "employees",
            findAllJobsUrl: baseUrl + "jobs",
            findAllLocationsUrl: baseUrl + "locations",
            findOneDepartmentUrl: baseUrl + "departments/",
            findOneEmployeeUrl: baseUrl + "employees/",
            findOneJobUrl: baseUrl + "jobs/",
            findOneLocationUrl: baseUrl + "locations/",
            deleteDepartmentUrl: baseUrl + "departments",
            deleteEmployeeUrl: baseUrl + "employees",
            deleteJobUrl: baseUrl + "jobs",
            deleteLocationUrl: baseUrl + "locations",
            addDepartmentUrl: baseUrl + "departments",
            addEmployeeUrl: baseUrl + "employees",
            addJobUrl: baseUrl + "jobs",
            addLocationUrl: baseUrl + "locations",
            editDepartmentUrl: baseUrl + "departments",
            editEmployeeUrl: baseUrl + "employees",
            editJobUrl: baseUrl + "jobs",
            editLocationUrl: baseUrl + "locations"
        };
    }
);