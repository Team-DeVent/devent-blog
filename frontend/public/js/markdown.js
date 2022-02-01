async function parserMarkdown(data) {
    result = data.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>')
        .replace(/[\#]{2}(.+)/g, '<h2>$1</h2>')
        .replace(/[\#]{1}(.+)/g, '<h1>$1</h1>')
        .replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" class="img" alt="$1" />')
        .replace(/\n/g, '<br>')

    return result
}