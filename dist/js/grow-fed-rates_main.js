let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";Highcharts.setOptions({lang:{thousandsSep:","}}),document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){let e=document.getElementById("chart-container");if(e)console.log("yesId");else{console.log("noId");let e=document.getElementsByClassName("chart-area");for(var t=0;t<e.length;t++)e[t].style.display="none";document.getElementById("chart-fallback").innerHTML+='<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">'}Highcharts.chart(e,{chart:{type:"arearange",styledMode:!0,spacingBottom:25,spacingRight:100},title:{text:null},data:{googleSpreadsheetKey:"19gPNciBoaDoDN3R5Ws2SQxBfrVL2jGk486llItuIvCE",googleSpreadsheetWorksheet:2},plotOptions:{series:{lineWidth:1,marker:{enabled:!1,symbol:"circle",fillColor:"#ffffff",states:{hover:{fillColor:"#ffffff"}}}}},legend:{enabled:!1},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow",format:"{value:.1f}"},min:0,max:2.5},credits:{enabled:!1},tooltip:{shadow:!1,padding:10,pointFormat:"{point.low}% - {point.high}%</b>"},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}})},1e3)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJjaGFydElkIiwiY29uc29sZSIsImxvZyIsImNoYXJ0QXJlYSIsImRpc3BsYXkiLCJpbm5lckhUTUwiLCJjaGFydCIsInR5cGUiLCJzdHlsZWRNb2RlIiwic3BhY2luZ0JvdHRvbSIsInNwYWNpbmdSaWdodCIsInRpdGxlIiwidGV4dCIsImRhdGEiLCJnb29nbGVTcHJlYWRzaGVldEtleSIsImdvb2dsZVNwcmVhZHNoZWV0V29ya3NoZWV0IiwicGxvdE9wdGlvbnMiLCJzZXJpZXMiLCJsaW5lV2lkdGgiLCJtYXJrZXIiLCJlbmFibGVkIiwic3ltYm9sIiwiZmlsbENvbG9yIiwic3RhdGVzIiwiaG92ZXIiLCJsZWdlbmQiLCJ4QXhpcyIsImxhYmVscyIsIndoaXRlU3BhY2UiLCJ0aWNrTGVuZ3RoIiwieUF4aXMiLCJ1c2VIVE1MIiwib3ZlcmZsb3ciLCJmb3JtYXQiLCJtaW4iLCJtYXgiLCJjcmVkaXRzIiwidG9vbHRpcCIsInNoYWRvdyIsInBhZGRpbmciLCJwb2ludEZvcm1hdCIsInJlc3BvbnNpdmUiLCJydWxlcyIsImNvbmRpdGlvbiIsIm1heFdpZHRoIiwiY2hhcnRPcHRpb25zIiwiYWxpZ24iLCJ4Il0sIm1hcHBpbmdzIjoiQUFRQSxJQUFBQSxRQUFBQyxTQUFBQyx1QkFBQSxpQkFDQUMsU0FBQUYsU0FBQUcsZUFBQSxjQUNBLElBQUFELFNBQ0EsSUFBQSxJQUFBRSxFQUFBLEVBQUFBLEVBQUFMLFFBQUFNLE9BQUFELElBQ0FMLFFBQUFLLEdBQUFFLE1BQUFDLFdBQUEsTUFJQUMsV0FBQUMsV0FBQSxDQUNBQyxLQUFBLENBQ0FDLGFBQUEsT0FJQVgsU0FBQVksaUJBQUEsbUJBQUEsV0FFQUMsV0FBQSxXQUVBLElBQUFDLEVBQUFkLFNBQUFHLGVBQUEsbUJBR0EsR0FBQVcsRUFTQUMsUUFBQUMsSUFBQSxhQVRBLENBQ0FELFFBQUFDLElBQUEsUUFDQSxJQUFBQyxFQUFBakIsU0FBQUMsdUJBQUEsY0FDQSxJQUFBLElBQUFHLEVBQUEsRUFBQUEsRUFBQWEsRUFBQVosT0FBQUQsSUFDQWEsRUFBQWIsR0FBQUUsTUFBQVksUUFBQSxPQUdBbEIsU0FBQUcsZUFBQSxrQkFBQWdCLFdBQUEsMElBUUFYLFdBQUFZLE1BQUFOLEVBQUEsQ0FDQU0sTUFBQSxDQUNBQyxLQUFBLFlBQ0FDLFlBQUEsRUFDQUMsY0FBQSxHQUNBQyxhQUFBLEtBRUFDLE1BQUEsQ0FDQUMsS0FBQSxNQUVBQyxLQUFBLENBQ0FDLHFCQUFBLCtDQUNBQywyQkFBQSxHQUVBQyxZQUFBLENBQ0FDLE9BQUEsQ0FDQUMsVUFBQSxFQUVBQyxPQUFBLENBQ0FDLFNBQUEsRUFDQUMsT0FBQSxTQUNBQyxVQUFBLFVBQ0FDLE9BQUEsQ0FDQUMsTUFBQSxDQUNBRixVQUFBLGVBTUFHLE9BQUEsQ0FDQUwsU0FBQSxHQUVBTSxNQUFBLENBQ0FDLE9BQUEsQ0FDQW5DLE1BQUEsQ0FDQW9DLFdBQUEsV0FHQUMsV0FBQSxHQUVBQyxNQUFBLENBQ0FuQixPQUFBLEVBQ0FnQixPQUFBLENBQ0FJLFNBQUEsRUFDQUMsU0FBQSxRQUNBQyxPQUFBLGVBRUFDLElBQUEsRUFDQUMsSUFBQSxLQUVBQyxRQUFBLENBQ0FoQixTQUFBLEdBRUFpQixRQUFBLENBQ0FDLFFBQUEsRUFDQUMsUUFBQSxHQUNBQyxZQUFBLG9DQUVBQyxXQUFBLENBQ0FDLE1BQUEsQ0FBQSxDQUNBQyxVQUFBLENBQ0FDLFNBQUEsS0FFQUMsYUFBQSxDQUNBdkMsTUFBQSxDQUNBSSxhQUFBLElBRUFlLE9BQUEsQ0FDQXFCLE1BQUEsT0FDQUMsR0FBQSxJQUVBVixRQUFBLENBQ0FqQixTQUFBLFVBTUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFkZHMgc29jaWFsIGNsYXNzIHRvIGdldCBzb2NpYWwgY2hhcnRcbi8vIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LWFyZWFcIik7XG4vLyBmb3IodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKylcbi8vIHtcbi8vICAgICBlbGVtZW50W2ldLmNsYXNzTmFtZSArPSBcIiBzb2NpYWxcIjtcbi8vIH1cblxuLy8gYm9sZHMgdGhlIHN1YmhlYWQgaWYgdGhlcmUgaXMgbm8gaGVhZGxpbmVcbmxldCBzdWJoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LXN1YmhlYWRcIiksXG4gICAgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWhlYWRcIik7XG4gICAgaWYgKCFoZWFkbGluZSkge1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3ViaGVhZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3ViaGVhZFtpXS5zdHlsZS5mb250V2VpZ2h0ID0gXCI2MDBcIjtcbiAgICAgICAgfSAgICAgICBcbiAgICAgfVxuXG5IaWdoY2hhcnRzLnNldE9wdGlvbnMoe1xuICAgIGxhbmc6IHtcbiAgICAgIHRob3VzYW5kc1NlcDogJywnXG4gICAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGxldCBjaGFydElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydC1jb250YWluZXJcIik7XG5cbiAgICAgICAgLy8gY2hlY2tzIGZvciB0aGUgY2hhcnQgSUQgYW5kIGRpc3BsYXlzIGEgYmFja3VwIGltYWdlIGlmIHRoZSBicm93c2VyIGNhbid0IGZpbmQgaXRcbiAgICAgICAgaWYgKCFjaGFydElkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm9JZCcpO1xuICAgICAgICAgICAgbGV0IGNoYXJ0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjaGFydC1hcmVhXCIpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNoYXJ0QXJlYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNoYXJ0QXJlYVtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLy8gaW5zZXJ0IGNoYXJ0IHNjcmVlbnNob3QgaGVyZVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydC1mYWxsYmFja1wiKS5pbm5lckhUTUwgKz0gJzxpbWcgc3JjPVwiaHR0cHM6Ly9mbS1zdGF0aWMuY25iYy5jb20vYXdzbWVkaWEvY2hhcnQvMjAxOS8xMC8wOC9jaGFydC1lcnJvcl93aWRlLjE1NzA1NjkzMzEyNTIucG5nXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTttYXgtd2lkdGg6NjYwcHhcIj4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3llc0lkJylcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgbXlDaGFydCA9ICBcblxuICAgICAgICAgICAgSGlnaGNoYXJ0cy5jaGFydChjaGFydElkLCB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FyZWFyYW5nZScsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlZE1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmdCb3R0b206IDI1LFxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwMFxuICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZ29vZ2xlU3ByZWFkc2hlZXRLZXk6ICcxOWdQTmNpQm9hRG9ETjNSNVdzMlNReEJmclZMMmpHazQ4NmxsSXR1SXZDRScsXG4gICAgICAgICAgICAgICAgICAgIGdvb2dsZVNwcmVhZHNoZWV0V29ya3NoZWV0OiAyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsaXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogJyNmZmZmZmYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpY2tMZW5ndGg6IDVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VIVE1MOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhbGxvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICd7dmFsdWU6LjFmfSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IDIuNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY3JlZGl0czoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBzaGFkb3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRGb3JtYXQ6ICd7cG9pbnQubG93fSUgLSB7cG9pbnQuaGlnaH0lPC9iPidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDUwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJ0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFjaW5nUmlnaHQ6IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAtMThcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LDEwMDApO1xuICAgIH0pOyJdfQ==