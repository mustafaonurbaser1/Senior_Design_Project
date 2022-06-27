import 'package:flutter/material.dart';
import 'package:mobile_senior/Pages/EventManagement/events_screen.dart';
import 'package:mobile_senior/Pages/Main/main_screen.dart';
import 'package:mobile_senior/Pages/Profile/profile_screen.dart';
import 'package:mobile_senior/Pages/Task/task_screen.dart';
import 'package:mobile_senior/Pages/ToDo/todolist_screen.dart';
import 'package:mobile_senior/constants.dart';

class NavDrawer extends StatelessWidget {
  const NavDrawer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          const DrawerHeader(
            child: Text(
              'Menu',
              style: TextStyle(color: Colors.white, fontSize: 25),
            ),
            decoration: BoxDecoration(
                color: kPrimaryColor,),
          ),
          ListTile(
            leading: const Icon(Icons.home),
            title: const Text('Main Page'),
            onTap: () => {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return  MainMenu();
                  },
                ),
              ),
            },
          ),
          ListTile(
            leading: const Icon(Icons.event),
            title: const Text('Events'),
            onTap: () => {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return  EventMenu();
                  },
                ),
              ),
            },
          ),
          ListTile(
            leading: const Icon(Icons.calendar_month),
            title: const Text('Task Management'),
            onTap: () => {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return const TaskMenu();
                  },
                ),
              ),
            },
          ),
          ListTile(
            leading: const Icon(Icons.list),
            title: const Text('To Do List'),
            onTap: () => {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return  ToDoMenu();
                  },
                ),
              ),
            },
          ),
          ListTile(
            leading: const Icon(Icons.settings),
            title: const Text('Profile/Settings'),
            onTap: () => {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return const ProfileMenu();
                  },
                ),
              ),
            },
          ),
        ],
      ),
    );
  }
}
