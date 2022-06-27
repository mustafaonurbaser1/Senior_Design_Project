import 'package:flutter/material.dart';
import 'package:mobile_senior/Pages/components/top_bar.dart';
import 'package:mobile_senior/constants.dart';
import 'package:syncfusion_flutter_calendar/calendar.dart';

class ToDoMenu extends StatelessWidget {
  ToDoMenu({Key? key}) : super(key: key);

  final titles = [
    'TO DO',
    'TO DO',
    'TO DO',
    'TO DO',
    'TO DO',
    'TO DO',
    'TO DO',
    'TO DO',
    'TO DO'
  ];

  final icons = [
    Icons.check_box_outline_blank,
    Icons.check_box_outline_blank,
    Icons.check_box_outline_blank,
    Icons.check_box_outline_blank,
    Icons.check_box_outline_blank,
    Icons.check_box_outline_blank,
    Icons.check_box_outline_blank,
    Icons.check_box_outline_blank,
    Icons.check_box_outline_blank
  ];
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
              child: Row(
                children: [
                  Expanded(
                    flex: 4,
                    child: ListView.builder(
                      itemCount: titles.length,
                      itemBuilder: (context, index) {
                        return Card(
                          //                           <-- Card widget
                          child: ListTile(
                            trailing: Icon(icons[index]),
                            title: Text(titles[index]),
                          ),
                        );
                      },
                    ),
                  ),
                  Expanded(
                    flex: 6,
                    child: Column(
                      children: [
                        Container(
                            margin: const EdgeInsets.all(0.5),
                            padding: const EdgeInsets.all(2.5),
                            decoration: BoxDecoration(
                              //border: Border.all(color: Colors.grey),
                              borderRadius: BorderRadius.circular(12),
                              boxShadow: [
                                BoxShadow(
                                  color: Colors.grey.withOpacity(0.5),
                                  spreadRadius: 5,
                                  blurRadius: 5,
                                  offset: const Offset(
                                      0, 2), // changes position of shadow
                                ),
                              ],
                            ),
                            child: const Align(
                              alignment: Alignment.center,
                              child: Text(("Daily Notes"),
                                  style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.bold,
                                  )),
                            )
                            //TextStyle:
                            ),
                       const TextField(
                      keyboardType: TextInputType.multiline,
                      maxLines: 13,
                      decoration: InputDecoration( 
                         hintText: "Your Notes Here",
                         focusedBorder: OutlineInputBorder(
                          borderSide: BorderSide(width: 1, color: Colors.redAccent)
                         )
                      ),
                       
                   ),
                      ],
                    ),
                  )
                ],
              )),
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
            ))
      ]),
    );
  }
}
