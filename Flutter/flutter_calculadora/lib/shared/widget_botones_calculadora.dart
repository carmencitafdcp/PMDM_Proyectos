import 'package:flutter/material.dart';

class BotonesCalculadora extends StatelessWidget {
  final String? label;
  final IconData? iconData;
  final Color? color;

  const BotonesCalculadora({
    super.key, 
    this.label, 
    this.iconData, 
    this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 80,
      height: 80,
      margin: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: color ?? Colors.grey[850],
        shape: BoxShape.circle,
        boxShadow: [BoxShadow(color: Colors.black26, blurRadius: 4)],
      ),
      child: GestureDetector(
        child: Center(
          child: iconData != null
              ? Icon(
                  iconData,
                  size: 28,
                  color: Colors.grey.shade100.withOpacity(0.8),
                )
              : Text(
                  label!,
                  style: const TextStyle(
                    fontSize: 32,
                    fontWeight: FontWeight.w500,
                    color: Colors.white,
                  ),
                ),
        ),
      ),
    );
  }
}
