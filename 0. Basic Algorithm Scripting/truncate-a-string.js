function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (num < str.length) {
        if (num - 4 < 0) {
            return str.substr(0, num) + "...";
        }
        return str.substr(0, num - 3) + "...";
    }

    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);