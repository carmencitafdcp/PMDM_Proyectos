import 'package:flutter/material.dart';

class CustomWidget extends StatelessWidget {
  const CustomWidget({
    super.key,
    required this.uvValue,
    required this.uvLabel,
    required this.uvColor,
  });

  final int uvValue;
  final String uvLabel;
  final Color uvColor;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 140,
      height: 140,
      decoration: BoxDecoration(
        color: const Color(0xFF2196F3),
        borderRadius: BorderRadius.circular(24),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.15),
            blurRadius: 8,
            offset: const Offset(0, 4),
          ),
        ],
      ),
    );
  }
}