import 'package:flutter/material.dart';
import 'package:flutter_calculadora/shared/widget_botones_calculadora.dart';

class GridCalculadora extends StatelessWidget {
  const GridCalculadora({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(18),
      child: Column(
        children: [
          Expanded(
            child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [
              BotonesCalculadora(iconData: Icons.backspace, color: Colors.grey[600]),
              BotonesCalculadora(iconData: Icons.add, color: Colors.grey[600]),
              BotonesCalculadora(iconData: Icons.percent, color: const Color.fromARGB(255, 82, 211, 157)),
              BotonesCalculadora(label: '÷', color: const Color.fromARGB(255, 82, 211, 157)),
            ]),
          ),
        
          Expanded(child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [const BotonesCalculadora(label: '7'), const BotonesCalculadora(label: '8'), const BotonesCalculadora(label: '9'), BotonesCalculadora(label: '×', color: const Color.fromARGB(255, 82, 211, 157))])),
          Expanded(child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [const BotonesCalculadora(label: '4'), const BotonesCalculadora(label: '5'), const BotonesCalculadora(label: '6'), BotonesCalculadora(label: '−', color: const Color.fromARGB(255, 82, 211, 157))])),
          Expanded(child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [const BotonesCalculadora(label: '1'), const BotonesCalculadora(label: '2'), const BotonesCalculadora(label: '3'), BotonesCalculadora(label: '+', color: const Color.fromARGB(255, 82, 211, 157))])),      
          Expanded(child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [const BotonesCalculadora(label: '+/-'), const BotonesCalculadora(label: '0'), const BotonesCalculadora(label: '.'), BotonesCalculadora(label: '=', color: const Color.fromARGB(255, 82, 211, 157))])),      
        ],
      ),
    );
  }
}

  


