import 'package:amazon_clone/constants/global_variables.dart';
import 'package:amazon_clone/features/auth/screens/auth_screen.dart';
import 'package:amazon_clone/router.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Amazon Clone',
      theme: ThemeData(
        scaffoldBackgroundColor: GlobalVariables.backgroundColor,
        colorScheme: const ColorScheme.light(
          primary: GlobalVariables.secondaryColor,
        ),
        appBarTheme: const AppBarTheme(
          titleTextStyle: TextStyle(
            color: Colors.white
          ),
          color: GlobalVariables.secondaryColor,
          centerTitle: true,
          elevation: 0,
          iconTheme: IconThemeData(color: Colors.black)
        )
      ),
      onGenerateRoute: (settings) => generateRoute(settings),
      // home: const MyHomePage(title: 'Flutter Demo Home Page'),
      home: const AuthScreen(),
    );
  }
}