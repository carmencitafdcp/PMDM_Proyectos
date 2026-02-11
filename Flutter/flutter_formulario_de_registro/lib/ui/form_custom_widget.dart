import 'package:flutter/material.dart';

class FormCustomWidget extends StatefulWidget {
  const FormCustomWidget({super.key});

  @override
  State<FormCustomWidget> createState() => _FormCustomWidgetState();
}

class _FormCustomWidgetState extends State<FormCustomWidget> {
  final _formKey = GlobalKey<FormState>();
  String _nombre = '';
  String _apellidos = '';
  String _email = '';
  String _password = '';
  String _repeatPassword = '';
  String? _sexo;
  bool _obscurePassword = true;
  bool _obscureRepeatPassword = true;

  bool _passwordsMatch() {
    return _password == _repeatPassword;
  }

  InputDecoration _inputDecoration(String label) {
    return InputDecoration(
      labelText: label,
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(12),
        borderSide: const BorderSide(color: Colors.blue, width: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final bottomInset = MediaQuery.of(context).viewInsets.bottom;
    return Padding(
      padding: EdgeInsets.only(bottom: bottomInset),
      child: Form(
        key: _formKey,
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: TextFormField(
                decoration: _inputDecoration('Nombre'),
                onChanged: (value) => _nombre = value,
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return 'Introduce tu nombre';
                  }
                  if (value.trim().length < 3) {
                    return 'El nombre debe tener al menos 3 caracteres';
                  }
                  return null;
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: TextFormField(
                decoration: _inputDecoration('Apellidos'),
                onChanged: (value) => _apellidos = value,
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return 'Introduce tus apellidos';
                  }
                  if (value.trim().length < 3) {
                    return 'Los apellidos deben tener al menos 3 caracteres';
                  }
                  return null;
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: DropdownButtonFormField<String>(
                decoration: _inputDecoration('Sexo'),
                value: _sexo,
                items: const [
                  DropdownMenuItem(value: 'H', child: Text('Hombre')),
                  DropdownMenuItem(value: 'M', child: Text('Mujer')),
                  DropdownMenuItem(value: 'O', child: Text('Otro')),
                ],
                onChanged: (value) {
                  setState(() {
                    _sexo = value;
                  });
                },
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Selecciona una opción';
                  }
                  return null;
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: TextFormField(
                decoration: _inputDecoration('Email'),
                keyboardType: TextInputType.emailAddress,
                onChanged: (value) => _email = value,
                validator: (value) {
                  if (value == null || value.trim().isEmpty) {
                    return 'Introduce un email';
                  }
                  if (!RegExp(r'^[^@]+@[^@]+\.[^@]+').hasMatch(value)) {
                    return 'Introduce un email válido';
                  }
                  return null;
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: TextFormField(
                decoration: _inputDecoration('Contraseña').copyWith(
                  suffixIcon: IconButton(
                    icon: Icon(
                      _obscurePassword
                          ? Icons.visibility_off
                          : Icons.visibility,
                    ),
                    onPressed: () {
                      setState(() {
                        _obscurePassword = !_obscurePassword;
                      });
                    },
                  ),
                ),
                obscureText: _obscurePassword,
                onChanged: (value) => _password = value,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Introduce una contraseña';
                  }
                  if (value.length < 6) {
                    return 'La contraseña debe tener al menos 6 caracteres';
                  }
                  return null;
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 8),
              child: TextFormField(
                decoration: _inputDecoration('Confirmar contraseña').copyWith(
                  suffixIcon: IconButton(
                    icon: Icon(
                      _obscureRepeatPassword
                          ? Icons.visibility_off
                          : Icons.visibility,
                    ),
                    onPressed: () {
                      setState(() {
                        _obscureRepeatPassword = !_obscureRepeatPassword;
                      });
                    },
                  ),
                ),
                obscureText: _obscureRepeatPassword,
                onChanged: (value) => _repeatPassword = value,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Repite la contraseña';
                  }
                  if (!_passwordsMatch()) {
                    return 'Las contraseñas no coinciden';
                  }
                  return null;
                },
              ),
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                        content: Text('Formulario enviado correctamente'),
                        backgroundColor: Colors.green,
                        duration: Duration(seconds: 2),
                      ),
                    );
                    showDialog(
                      context: context,
                      builder: (context) {
                        return AlertDialog(
                          title: const Text('Usuario registrado'),
                          content: Text(
                            'Nombre: $_nombre\n'
                            'Apellidos: $_apellidos\n'
                            'Sexo: ${_sexo ?? ''}\n'
                            'Email: $_email',
                          ),
                          actions: [
                            TextButton(
                              onPressed: () => Navigator.pop(context),
                              child: const Text('OK'),
                            ),
                          ],
                        );
                      },
                    );
                  }
                },
                child: const Text('Registrarse'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
