import 'package:flutter/material.dart';

class WidgetDineroCambiar extends StatelessWidget {
  final double amount;
  final double balance;
  final String badgeCode;
  final String flag;
  final Color? color;

  const WidgetDineroCambiar({
    super.key,
    required this.amount,
    required this.balance,
    required this.badgeCode,
    required this.flag,
    this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(12),
      padding: EdgeInsets.all(20),
      constraints: const BoxConstraints(minHeight: 96),
      decoration: BoxDecoration(
        color: color ?? Colors.white,
        boxShadow: [
          BoxShadow(
            color: const Color.fromARGB(255, 201, 200, 200),
            blurRadius: 20,
          ),
        ],
        borderRadius: BorderRadius.circular(15),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  amount.toStringAsFixed(2),
                  style: const TextStyle(fontSize: 32, fontWeight: FontWeight.w600),
                ),
                const SizedBox(height: 2),
                Text(
                  'Balance: \$${balance.toStringAsFixed(2)}',
                  style: const TextStyle(color: Colors.black54),
                ),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(12),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                CircleAvatar(
                  radius: 12,
                  backgroundImage: AssetImage(flag),
                ),
                const SizedBox(width: 8),
                Text(badgeCode, style: TextStyle(fontWeight: FontWeight.w500)),
                const SizedBox(width: 2),
                const Icon(Icons.keyboard_arrow_down, size: 18),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
