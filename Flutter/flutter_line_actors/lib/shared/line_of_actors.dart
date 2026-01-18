import 'package:flutter/material.dart';

class LineOfActors extends StatelessWidget {
  final String nombre;
  final String apellidos;
  final String imageUrl;

  const LineOfActors({
    super.key,
    required this.nombre,
    required this.apellidos,
    required this.imageUrl,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 180,
      margin: EdgeInsets.only(right: 12),
      child: Card(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
              borderRadius: const BorderRadius.vertical(top: Radius.circular(20)),
              child: Image.network(
                imageUrl,
                height: 240,
                width: double.infinity,
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) =>
                    Container(height: 240, color: Colors.grey[300]),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
