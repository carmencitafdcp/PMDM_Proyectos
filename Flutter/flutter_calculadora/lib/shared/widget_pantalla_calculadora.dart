import 'package:flutter/material.dart';

class PantallaDisplayCalculadora extends StatelessWidget {
  const PantallaDisplayCalculadora({super.key});

  @override
  Widget build(BuildContext context) {
      return Align(
      alignment: Alignment.bottomRight,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(0, 0, 24, 0), 
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            const Text(
              '1+1',
              style: TextStyle(fontSize: 20, color: Colors.grey),
            ),
            SizedBox(height: 12),
            const Text(
              '3',
              style: TextStyle(
                fontSize: 80,
                fontWeight: FontWeight.w200,
                color: Colors.white,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
