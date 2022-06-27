import 'package:flutter/material.dart';
import 'package:mobile_senior/Pages/components/top_bar.dart';
import 'package:mobile_senior/constants.dart';
import 'package:syncfusion_flutter_calendar/calendar.dart';

class TaskMenu extends StatelessWidget {
  const TaskMenu({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const TopBar(),
      body: Column(children: [
        Expanded(
          flex: 5,
          child: Container(
            //Container 1 - Slider Widget
            width: MediaQuery.of(context).size.width,
            color: kPrimaryLigthColor,
            child: Table(
              border: TableBorder.all(),
              columnWidths: const <int, TableColumnWidth>{
                0: IntrinsicColumnWidth(),
                1: FlexColumnWidth(),
                2: FixedColumnWidth(64),
              },
              //defaultVerticalAlignment: TableCellVerticalAlignment.middle,
              children: <TableRow>[
                TableRow(
                  children: <Widget>[
                    TableCell(
                      child: Container(
                        height: 64,
                        color: Colors.white,
                        child: const Text("Task Name"),
                        alignment: Alignment.center,
                      ),
                    ),
                    TableCell(
                      verticalAlignment: TableCellVerticalAlignment.top,
                      child: Container(
                          height: 64,
                          width: 80,
                          color: Colors.green,
                          child: const Align(
                            alignment: Alignment.center,
                            child: Text(("Trivial"),
                            style:TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold,
                            )
                            ),
                          ),
                          ),
                    ),
                    TableCell(
                      child: Container(
                        height: 64,
                        width: 80,
                        color: Colors.yellow,
                        child: const Align(
                            alignment: Alignment.center,
                            child: Text(("Important"),
                            style:TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold,
                            )
                            ),
                          ),
                      ),
                    ),
                    TableCell(
                      child: Container(
                        height: 64,
                        color: Colors.red,
                        child: const Align(
                            alignment: Alignment.center,
                            child: Text(("Urgent"),
                            style:TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold,
                            )
                            ),
                          ),
                      ),
                    ),
                  ],
                ),
                TableRow(
                  decoration: const BoxDecoration(
                    color: Colors.grey,
                  ),
                  children: <Widget>[
                    Container(
                      height: 64,
                      //width: 128,
                      color: Colors.white,
                      child: const Text("Assigned"),
                      alignment: Alignment.center,
                    ),
                    Container(
                      height: 64,
                      color: Colors.white,
                    ),
                    Container(
                      height: 64,
                      color: Colors.white,
                    ),
                    TableCell(
                      child: Container(
                        height: 64,
                        color: Colors.white,
                      ),
                    ),
                  ],
                ),
                TableRow(
                  children: <Widget>[
                    TableCell(
                      child: Container(
                        height: 64,
                        color: Colors.white,
                        child: const Text("Working"),
                        alignment: Alignment.center,
                      ),
                    ),
                    TableCell(
                      verticalAlignment: TableCellVerticalAlignment.top,
                      child: Container(
                        height: 64,
                        color: Colors.white,
                      ),
                    ),
                    TableCell(
                      child: Container(
                        height: 64,
                        color: Colors.white,
                      ),
                    ),
                    TableCell(
                      child: Container(
                        height: 64,
                        color: Colors.white,
                      ),
                    ),
                  ],
                ),
                TableRow(
                  children: <Widget>[
                    TableCell(
                      child: Container(
                        height: 64,
                        color: Colors.white,
                        child: const Text("Done"),
                        alignment: Alignment.center,
                      ),
                    ),
                    TableCell(
                      verticalAlignment: TableCellVerticalAlignment.top,
                      child: Container(
                        height: 64,
                        color: Colors.white,
                      ),
                    ),
                    TableCell(
                      child: Container(
                        height: 64,
                        color: Colors.white,
                      ),
                    ),
                    TableCell(
                      child: Container(
                        height: 64,
                        color: Colors.white,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
        Expanded(
            flex: 5,
            child: Container(
              //Container 2 - Card Widget x3
              width: MediaQuery.of(context).size.width,
              color: kPrimaryLigthColor,
              child: SfCalendar(
                view: CalendarView.month,
                showNavigationArrow: true,
              ),
            )),
      ]),
    );
  }
}
