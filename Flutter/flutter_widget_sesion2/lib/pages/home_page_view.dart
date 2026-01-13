import 'package:flutter/material.dart';
import 'package:flutter_widget_sesion2/shared/custom_widget.dart';

class HomePageView extends StatelessWidget {
  const HomePageView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF1976D2),
      body: Center(
        child: UvCard(
          uvValue: 2,
          uvLabel: 'Low',
          uvColor: Colors.green,
        )
      ),
    );
  }
}