import 'package:flutter/material.dart';
import 'package:flutter_calculadora/shared/grid_calculadora.dart';
import 'package:flutter_calculadora/shared/top_bar.dart';
import 'package:flutter_calculadora/shared/widget_pantalla_calculadora.dart';

class CalculadoraPageView extends StatelessWidget {
  const CalculadoraPageView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Column(
        children: [
          Expanded(flex: 1, child: TopBar()),
          Expanded(flex: 2, child: PantallaDisplayCalculadora()),
          Expanded(flex: 3, child: GridCalculadora()),
        ],
      ),
    );
  }
}
