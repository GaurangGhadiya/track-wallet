export const ConvertJsonToFormData = (jsonObject, formData = new FormData(), parentKey = '') => {
    Object.entries(jsonObject).forEach(([key, value]) => {
      const fieldKey = parentKey ? `${parentKey}[${key}]` : key;
  
      if (value instanceof File || value instanceof Blob) { 
        // Append files or blobs directly
        formData.append(fieldKey, value);
      } else if (typeof value === 'object' && value !== null) {
        // Recursively append nested objects
        ConvertJsonToFormData(value, formData, fieldKey);
      } else {
        // Append primitive values
        formData.append(fieldKey, value);
      }
    });
  
    return formData;
  };
  