import 'package:flutter/material.dart';
import 'package:mobile_senior/Pages/Profile/profile_screen.dart';
import 'package:mobile_senior/Pages/components/side_menu.dart';

class TopBar extends StatelessWidget implements PreferredSizeWidget {
  const TopBar({
    Key? key,
  }) : super(key: key);

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        toolbarHeight: 50,
        leading: IconButton(
          icon: const Icon(Icons.menu),
          color: Colors.black,
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) {
                  return const NavDrawer();
                },
              ),
            );
          },
        ),
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.search),
            color: Colors.black,
            onPressed: () {},
          ),
          IconButton(
            icon: const Icon(Icons.person),
            color: Colors.black,
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return  const ProfileMenu();
                  },
                ),
              );
            },
          )
        ],
        backgroundColor: Colors.white,
      ),
    );
  }
}
