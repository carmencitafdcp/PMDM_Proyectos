import 'package:flutter/material.dart';

class WidgetBotonesCalculadora extends StatelessWidget {
  final String? label;
  final IconData? icono;
  final Color? color;

  const WidgetBotonesCalculadora({
    super.key, 
    this.label, 
    this.icono, 
    this.color
    });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 100,
      height: 70,
      margin: const EdgeInsets.all(5),
      decoration: BoxDecoration(
        color: color ?? const Color.fromARGB(255, 250, 250, 250),
        boxShadow: [BoxShadow(color: const Color.fromARGB(66, 247, 246, 246), blurRadius: 4)],
        shape: BoxShape.rectangle,
        borderRadius: BorderRadius.circular(25)
      ),
      child: GestureDetector(
        child: Center(
          child: icono != null
              ? Icon(
                  icono,
                  size: 28,
                  color: Colors.grey.shade100.withOpacity(0.8),
                )
              : Text(
                  label!,
                  style: const TextStyle(
                    fontSize: 32,
                    fontWeight: FontWeight.w500,
                    color: Color.fromARGB(255, 51, 50, 50),
                  ),
                ),
        ),
      ),
    );
  }
}