# TextCull (Summarizer)

TextCull is a versatile summarization tool that empowers users to condense content effortlessly. Whether you're dealing with YouTube videos, blog articles, PDF documents, or plain text, TextCull has you covered. Choose between extractive and abstractive summarization techniques to tailor the summary to your needs.

## Features

- **YouTube Summarizer**: Paste YouTube links, specify the summary size, and obtain concise video summaries. The tool integrates YouTube Transcript API for subtitles, ensuring accuracy in summarization.
  
- **Blog Summarizer**: Simply input the blog text, adjust the summary size, and receive a well-crafted summary. TextCull utilizes advanced summarization techniques to distill the key points.

- **PDF Summarizer**: Upload PDF files, select the desired summary size, and let TextCull generate a comprehensive summary. The tool intelligently processes PDF content for effective summarization.

- **Text Summarizer**: For plain text, effortlessly paste or type your content, set the summary size, and obtain a summarized version swiftly. TextCull's algorithms provide both extractive and abstractive summarization.

## Summarization Techniques

- **Extractive Summarization**: Utilizes TF-IDF (Term Frequency-Inverse Document Frequency) to identify essential keywords and sentences for a concise summary.

- **Abstractive Summarization**: Implements BART (Bidirectional and Auto-Regressive Transformers) for a more interpretative and condensed summary, capturing the essence of the content.

## How to Use

1. **YouTube Summarizer**:
   - Paste the YouTube link.
   - Set the desired summary size.
   - Receive an extractive or abstractive video summary.

2. **Blog Summarizer**:
   - Input the blog text.
   - Adjust the summary size.
   - Obtain a well-crafted summary.

3. **PDF Summarizer**:
   - Upload the PDF file.
   - Select the summary size.
   - Generate a comprehensive summary.

4. **Text Summarizer**:
   - Paste or type the text.
   - Set the summary size.
   - Receive an extractive or abstractive summary.

## Tech Stack

- Frontend: HTML, CSS, JavaScript, Lottie
- Backend: Python, Django, Django REST framework
- Database: PostgreSQL or MySQL
- Summarization Techniques: TF-IDF, BART
- YouTube Integration: YouTube Data API
- File Handling: Django FileField
- Frontend Libraries: Bootstrap
- Deployment: Heroku, AWS

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/TextCull.git
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:
   ```bash
   python manage.py runserver
   ```

Visit [TextCull](https://www.textcull.com) and start summarizing your content effortlessly!

---

Feel free to contribute, report issues, or suggest enhancements. Happy summarizing with TextCull!
