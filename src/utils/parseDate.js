export const parseDate = (date) => {
    const systemDate = new Date(Date.parse(date));
    const diff = Math.floor((new Date() - systemDate) / 1000); // Difference is in seconds
  
    switch (true) {
      case diff < 60:
        return "less than a minute ago";
      case diff <= 90:
        return "one minute ago";
      case diff <= 3540:
        return `${Math.round(diff / 60)} minutes ago`;
      case diff <= 5400:
        return "1 hour ago";
      case diff <= 86400:
        return `${Math.round(diff / 3600)} hours ago`;
      case diff <= 129600:
        return "1 day ago";
      case diff < 604800:
        return `${Math.round(diff / 86400)} days ago`;
      case diff <= 777600:
        return "1 week ago";
      default:
        return `on ${systemDate}`;
    }
  };