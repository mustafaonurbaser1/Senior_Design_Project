import 'package:flutter/material.dart';
import 'package:mobile_senior/Pages/Login/login_screen.dart';
import 'package:mobile_senior/Pages/SignUp/signup_screen.dart';


class LoginAndSignupBtn extends StatelessWidget {
  const LoginAndSignupBtn({
    Key? key,
  }) : super(key: key);

  get kPrimaryColor => null;

  @override
  Widget build(BuildContext context) {
    return Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          ElevatedButton(
            child: const Text(' Login '),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return const LoginScreen();
                  },
                ),
              );
            },
            style: ButtonStyle(backgroundColor: kPrimaryColor),
          ),
          ElevatedButton(
            child: const Text('Sign Up'),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) {
                    return  const SignUpScreen();
                  },
                ),
              );
            },
            style: ButtonStyle(backgroundColor: kPrimaryColor),
          ),
        ]);
  }
}
