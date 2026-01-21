import 'package:flutter/material.dart';
import 'package:flutter_aplicacion_conversor/pages/home_page_view.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Badge Conversor',
      home: const HomePageView(),
    );
  }
}
