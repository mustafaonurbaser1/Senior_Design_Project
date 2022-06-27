import 'package:flutter/material.dart';
import 'package:mobile_senior/constants.dart';
import 'components/login_signup_button.dart';

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        //column düzelt
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          Container(
              width: double.infinity,
              height: MediaQuery.of(context).size.height,
              color: kPrimaryLigthColor,
              child: Row(
                children:  [
                  SizedBox(
                    width: MediaQuery.of(context).size.width,
                    child: const LoginAndSignupBtn(),
                  ),
                ],
              )),
        ],
      ),
    );
  }
}
