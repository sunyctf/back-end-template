/*
 Template Name: Fonik - Responsive Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Dashboard js
 */

!function ($) {
    "use strict";

    var Dashboard = function () {
    };
        //creates Bar chart
        Dashboard.prototype.createBarChart = function (element, data, xkey, ykeys, labels, lineColors) {
            Morris.Bar({
                element: element,
                data: data,
                xkey: xkey,
                ykeys: ykeys,
                labels: labels,
                gridLineColor: 'rgba(255,255,255,0.1)',
                gridTextColor: '#98a6ad',
                barSizeRatio: 0.2,
                resize: true,
                hideHover: 'auto',
                barColors: lineColors
            });
        },

        //creates area chart
        Dashboard.prototype.createAreaChart = function (element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
            Morris.Area({
                element: element,
                pointSize: 0,
                lineWidth: 0,
                data: data,
                xkey: xkey,
                ykeys: ykeys,
                labels: labels,
                resize: true,
                gridLineColor: '#eee',
                hideHover: 'auto',
                lineColors: lineColors,
                fillOpacity: .6,
                behaveLikeLine: true
            });
        },

        //creates Donut chart
        Dashboard.prototype.createDonutChart = function (element, data, colors) {
            Morris.Donut({
                element: element,
                data: data,
                resize: true,
                colors: colors,
            });
        },

        Dashboard.prototype.init = function () {

            //creating bar chart
            var $barData = [
                {y: '2006', a: 100, b: 90},
                {y: '2007', a: 75, b: 65},
                {y: '2008', a: 50, b: 40},
                {y: '2009', a: 75, b: 65},
                {y: '2010', a: 50, b: 40},
                {y: '2011', a: 75, b: 65},
                {y: '2012', a: 100, b: 90},
                {y: '2013', a: 90, b: 75},
                {y: '2014', a: 75, b: 65},
                {y: '2015', a: 50, b: 40},
                {y: '2016', a: 75, b: 65},
                {y: '2017', a: 100, b: 90},
                {y: '2018', a: 90, b: 75}
            ];
            this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#2f8ee0','#4bbbce']);

            //creating area chart
            var $areaData = [
                {y: '2007', a: 0, b: 0, c:0},
                {y: '2008', a: 150, b: 45, c:15},
                {y: '2009', a: 60, b: 150, c:195},
                {y: '2010', a: 180, b: 36, c:21},
                {y: '2011', a: 90, b: 60, c:360},
                {y: '2012', a: 75, b: 240, c:120},
                {y: '2013', a: 30, b: 30, c:30}
            ];
            this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b', 'c'], ['Series A', 'Series B', 'Series C'], ['#ccc', '#2f8ee0', '#4bbbce']);

            //creating donut chart
            var $donutData = [
                {label: "Marketing", value: 12},
                {label: "Online", value: 42},
                {label: "Offline", value: 20}
            ];
            this.createDonutChart('morris-donut-example', $donutData, ['#f0f1f4', '#2f8ee0', '#4bbbce']);

          
        },
        //init
        $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
}(window.jQuery),

//initializing
    function ($) {
        "use strict";
        $.Dashboard.init();
    }(window.jQuery);