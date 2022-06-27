import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:mobile_senior/Pages/components/top_bar.dart';
import 'package:mobile_senior/constants.dart';
import 'package:syncfusion_flutter_calendar/calendar.dart';

class MainMenu extends StatelessWidget {
  MainMenu({Key? key}) : super(key: key);

  final List<String> imageList = [
    "https://images.hdqwalls.com/download/spiderman-peter-parker-standing-on-a-rooftop-ix-1280x720.jpg",
    "https://images.hdqwalls.com/download/spiderman-peter-parker-standing-on-a-rooftop-ix-1280x720.jpg",
    "https://images.hdqwalls.com/download/spiderman-peter-parker-standing-on-a-rooftop-ix-1280x720.jpg",
    "https://images.hdqwalls.com/download/spiderman-peter-parker-standing-on-a-rooftop-ix-1280x720.jpg",
    "https://images.hdqwalls.com/download/spiderman-peter-parker-standing-on-a-rooftop-ix-1280x720.jpg"
  ];
  @override
  Widget build(BuildContext context) {
    // ignore: prefer_const_constructors
    return Scaffold(
      appBar: const TopBar(),
      body: Column(children: [
        Expanded(
            flex: 3,
            child: Container(
              //Container 1 - Slider Widget
              width: MediaQuery.of(context).size.width,
              color: kPrimaryLigthColor,
              child: CarouselSlider(
                options: CarouselOptions(
                  enlargeCenterPage: true,
                  enableInfiniteScroll: false,
                  autoPlay: true,
                ),
                items: imageList
                    .map((e) => ClipRRect(
                          borderRadius: BorderRadius.circular(8),
                          child: Stack(
                            fit: StackFit.expand,
                            children: <Widget>[
                              Image.network(
                                e,
                                width: 1050,
                                height: 350,
                                fit: BoxFit.cover,
                              )
                            ],
                          ),
                        ))
                    .toList(),
              ),
            )),
        Expanded(
          flex: 3,
          child: ListView(
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.all(8),
            children: <Widget>[
              Container(
                height: 250,
                child: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  elevation: 5,
                  margin: const EdgeInsets.all(10),
                ),
                width: 160.0,
                color: kPrimaryColor,
              ),
              Container(
                height: 250,
                child: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  elevation: 5,
                  margin: const EdgeInsets.all(10),
                ),
                width: 160.0,
                color: kPrimaryColor,
              ),
              Container(
                height: 250,
                child: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  elevation: 5,
                  margin: const EdgeInsets.all(10),
                ),
                width: 160.0,
                color: kPrimaryColor,
              ),
            ],
          ),
        ),
        Expanded(
          flex: 3,
          child: Container(
            //Container 3 - Calendar Widget
            width: MediaQuery.of(context).size.width,
            color: kPrimaryLigthColor,
            child: SfCalendar(
              view: CalendarView.month,
              showNavigationArrow: true,
            ),
          ),
        )
      ]),
    );
  }
}