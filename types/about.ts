/** The "Our Story" section content. */
export interface AboutStoryContent {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  /** Gallery category slug whose cover illustrates the story. */
  imageCategory: string;
}

/** All About page content. */
export interface AboutContent {
  /** Short intro shown in the page header. */
  intro: string;
  story: AboutStoryContent;
}
