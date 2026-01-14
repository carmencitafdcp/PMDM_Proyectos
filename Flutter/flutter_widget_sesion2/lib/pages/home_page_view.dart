import 'package:flutter/material.dart';
import 'package:flutter_widget_sesion2/shared/custom_widget.dart';

class HomePageView extends StatelessWidget {
  const HomePageView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF1976D2),
      body: const Center(
          child: CustomWidget(
          uvValue: 2,
          uvLabel: 'Very Low',
          uvColor: Colors.green,
        )
      ),
    );
  }
}