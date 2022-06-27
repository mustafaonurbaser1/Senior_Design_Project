import 'package:flutter/material.dart';
import 'package:mobile_senior/Pages/components/top_bar.dart';
import 'package:mobile_senior/constants.dart';

class ProfileMenu extends StatelessWidget {
  const ProfileMenu({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const TopBar(),
      body: Column(children: [
        Expanded(
          flex: 5,
          child: Container(
            color: kPrimaryColor,
            child: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10.0),
                  ),
                  elevation: 5,
                  margin: const EdgeInsets.all(10),
                ),
                width: MediaQuery.of(context).size.width,
          ) 
        ),
        Expanded(
          flex: 5,
          child: Container(
            alignment: Alignment.topLeft,
            width: (MediaQuery.of(context).size.width / 2),
            color: kPrimaryLigthColor,
            child: ListView(
              children: <Widget>[
                ListTile(
                    title: const Text("Settings"),
                    trailing: const Icon(Icons.settings),
                    onTap: () => {}),
                ListTile(
                    title: const Text("About Us"),
                    trailing: const Icon(Icons.info_rounded),
                    onTap: () => {}),
                ListTile(
                    title: const Text("Contact"),
                    trailing: const Icon(Icons.contact_page),
                    onTap: () => {})
              ],
            ),
          ),
        ),
      ]),
    );
  }
}

/*ListView(
                children: const <Widget>[
                  Card(
                    child: ListTile(
                      title: const Text("Settings"),
                      trailing: const Icon(Icons.settings),
                      onTap: () => {},
                    ),
                  ),
                  Card(
                    child: ListTile(
                      title: const Text("About Us"),
                      trailing: const Icon(Icons.settings),
                      onTap: () => {},
                    ),
                  ),
                  Card(
                    child: ListTile(
                      title: const Text("Contact"),
                      trailing: const Icon(Icons.settings),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => YourNewPage(),
                          ),
                        );
                      },
                    ),
                  ),
                ],
              )

ListTile(
                title: const Text("Settings"),
                trailing: const Icon(Icons.settings),
                onTap: () => {}),
                */