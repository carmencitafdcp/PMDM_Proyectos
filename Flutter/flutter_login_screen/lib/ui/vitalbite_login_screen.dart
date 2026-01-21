import 'package:flutter/material.dart';

class VitalbiteLoginScreen extends StatelessWidget {
  const VitalbiteLoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [ 
          Container(
            width: double.infinity,
            height: double.infinity,
            decoration: const BoxDecoration(
              image: DecorationImage(image: AssetImage('assets\fondoVitalBite.png'), fit: BoxFit.cover, ),
            ),
          ),
          Positioned(
            top: 140,
            left: 0,
            right: 0,
            child: Center(
              child: Column(
                children: [
                  Text(
                    'Welcome to',
                    style: TextStyle(
                      fontSize: 28,
                      fontWeight: FontWeight.w600,
                      color: Colors.white,
                      shadows: [Shadow(color: Colors.black54, offset: Offset(2,2), blurRadius: 4)],
                    ),
                  ),
                  Text(
                    'VitalBite',
                    style: TextStyle(
                      fontSize:   44,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                      shadows: [Shadow(color: Colors.black87, offset: Offset(3, 3), blurRadius: 8)],
                    ),
                  ),
                ],
              ),
            ),
          ),
          Center(
            child: Container(
              margin: const EdgeInsets.symmetric(horizontal: 24),
              width: double.infinity,
              constraints: const BoxConstraints(maxWidth: 380),
              padding: const EdgeInsets.all(32),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(28),
                color: Colors.white.withOpacity(0.12),
                border: Border.all(color: Colors.white.withOpacity(18), width: 1),
                boxShadow: [BoxShadow(
                  color: Colors.black.withOpacity(0.25)
                )],
              ),
            ),
          ),
        ],
      ),
    );
  }
}