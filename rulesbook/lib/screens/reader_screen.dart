import 'package:flutter/material.dart';
import 'package:rulesbook/models/document_model.dart';
import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';

class ReaderScreen extends StatefulWidget {
  const ReaderScreen(this.doc, {super.key});
  final Document doc;

  @override
  State<ReaderScreen> createState() => _ReaderScreenState();
}

class _ReaderScreenState extends State<ReaderScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.deepOrange,
        title: Text(widget.doc.doc_title!),
      ),
      body: SfPdfViewer.network(
        widget.doc.doc_url!,
        onDocumentLoadFailed: (PdfDocumentLoadFailedDetails details) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text("Failed to load PDF: ${details.error}")),
          );
        },
      ),
      // body: SfPdfViewer.asset('sample.pdf'), //works with downloaded PDFs
    );
  }
}
