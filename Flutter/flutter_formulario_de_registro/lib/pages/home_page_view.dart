import 'package:flutter/material.dart';
import 'package:flutter_formulario_de_registro/ui/form_custom_widget.dart';

class HomePageView extends StatelessWidget {
  const HomePageView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Registro de usuario'),
      ),
      body: const Padding(
        padding: EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: FormCustomWidget(),
        ),
      ),
    );
  }
}