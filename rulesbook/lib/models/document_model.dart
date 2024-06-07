class Document {
  String? doc_title;
  String? doc_url;
  String? doc_date;
  int? page_num;

  Document(this.doc_title, this.doc_url, this.doc_date, this.page_num);

  static List<Document> doc_list = [
    Document(
      "Bulgarian",
      "https://cdn.syncfusion.com/content/PDFViewer/flutter-succinctly.pdf", // only work with their own URLs
      "07-06-2024",
      40),
    Document(
     "English",
     "https://file-examples.com/storage/fe4e1227086659fa1a24064/2017/10/file-sample_150kB.pdf", //doesn't work with urls except SYNCFUSION ones!
     "07-06-2024",
     1)
  ];
}