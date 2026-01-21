import 'package:flutter/material.dart';
import 'package:flutter_calculadora/shared/widget_botones_calculadora.dart';

class TopBar extends StatelessWidget {
  const TopBar({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
        child: Row(
          mainAxisAlignment:  MainAxisAlignment.spaceBetween,
          children: [
            BotonesCalculadora(
            iconData: Icons.menu_rounded,
            color: Colors.grey[800],
            ),
            BotonesCalculadora(
              iconData: Icons.calculate_rounded,
              color: Colors.grey[800],
            )
          ],
        ),
      ),
    );
  }
}
