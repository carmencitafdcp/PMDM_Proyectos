import 'package:flutter/material.dart';
import '../shared/tarjeta_widget_destinos.dart';

class HomePageView extends StatelessWidget {
  const HomePageView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Preview - Tarjeta Destino')),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: WidgetTarjetaDestinos(
            width: 340,
            height: 350,
            imageUrl: 'https://www.lavanguardia.com/files/content_image_desktop_filter/files/fp/uploads/2021/07/13/60ed84a3798a4.r_d.1996-1496.jpeg',
            location: 'Islas Canarias',
            title: 'Sotavento',
            rating: 4.7,
            onTap: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Tarjeta pulsada')),
              );
            },
          ),
        ),
      ),
    );
  }
}