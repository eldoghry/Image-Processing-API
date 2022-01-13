const replaceTemplate = (name: string, path: string, template: string): string => {
  let output = template.replace(/{%IMAGENAME%}/g, name);
  output = output.replace(/{%IMAGEURL%}/g, path);
  return output;
};

export default replaceTemplate;
