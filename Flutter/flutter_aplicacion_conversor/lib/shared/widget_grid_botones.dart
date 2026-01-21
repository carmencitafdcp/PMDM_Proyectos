import 'package:flutter/material.dart';
import 'package:flutter_aplicacion_conversor/shared/widget_botones_calculadora.dart';

class WidgetGridBotones extends StatelessWidget {
  const WidgetGridBotones({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
      child: Column(
        children: [
          Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [const WidgetBotonesCalculadora(label: '1'), const WidgetBotonesCalculadora(label: '2'), const WidgetBotonesCalculadora(label: '3')]),
          SizedBox(height: 8), 
          Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [const WidgetBotonesCalculadora(label: '4'), const WidgetBotonesCalculadora(label: '5'), const WidgetBotonesCalculadora(label: '6')]),
          SizedBox(height: 8), 
          Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [const WidgetBotonesCalculadora(label: '7'), const WidgetBotonesCalculadora(label: '8'), const WidgetBotonesCalculadora(label: '9')]), 
          SizedBox(height: 8),     
          Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [const WidgetBotonesCalculadora(label: '.'), const WidgetBotonesCalculadora(label: '0'), const WidgetBotonesCalculadora(label: '=')]), 
          SizedBox(height: 8)     
        ],
      ),
    );
  }
}