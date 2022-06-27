import 'package:flutter/material.dart';
import 'package:mobile_senior/Pages/SignUp/components/signup_form.dart';

class SignUpScreen extends StatelessWidget {
  const SignUpScreen({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Row(
            children: const [
              Spacer(),
              Expanded(
                flex: 8,
                child: SignUpForm(),
              ),
              Spacer(),
            ],
          ),
        ],
      ),
    );
  }
}