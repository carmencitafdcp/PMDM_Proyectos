import 'package:flutter/material.dart';
import 'package:flutter_aplicacion_conversor/shared/widget_dinero_cambiar.dart';
import 'package:flutter_aplicacion_conversor/shared/widget_grid_botones.dart';

class HomePageView extends StatelessWidget {
  const HomePageView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color.fromARGB(255, 228, 228, 228),
      body: Column(
        children: [
          const Text(
            'Between Accounts',
            style: TextStyle(color: Colors.black, fontWeight: FontWeight.w700),
          ),
          const Text(
            'No comission',
            style: TextStyle(color: Color.fromARGB(255, 138, 136, 136), fontWeight: FontWeight.w500),
          ),
          const Text(
            '1USD = 7,2493 CNY',
            style: TextStyle(color: Color.fromARGB(255, 138, 136, 136), fontWeight: FontWeight.w500, backgroundColor: Color.fromARGB(255, 61, 60, 60)),
          ),
          WidgetDineroCambiar(
            amount: 140.00,
            balance: 150.56,
            badgeCode: 'USA',
            flag: 'assets/flag_usa.png',
          ),
          WidgetDineroCambiar(
            amount: 1014.90,
            balance: 246.63,
            badgeCode: 'CNY',
            flag: 'assets/flag_china.png',
          ),
          Expanded(flex: 3, child: WidgetGridBotones()),
        ],
      ),
    );
  }
}
