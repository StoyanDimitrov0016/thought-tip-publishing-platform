import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./discover-menu.styles.css";
import caretSymbolPath from "../../assets/caret-down-thin-svgrepo-com.svg";

import { ICategoryEntry, ITopicEntry, ITagEntry } from "../../types/IEntries";
import { getAllCategories, getAllTopics, getAllTags } from "../../api/segmentation";

const DiscoverMenu: React.FC = () => {
  const [categories, setCategories] = useState<ICategoryEntry[] | null>(null);
  const [topics, setTopics] = useState<ITopicEntry[]>([]);
  const [tags, setTags] = useState<ITagEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<{
    category: null | string;
    topic: null | string;
  }>({
    category: null,
    topic: null,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const fetchedCategories = await getAllCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = async (categorySlug: string) => {
    try {
      const fetchedTopics = await getAllTopics(categorySlug);
      setSelected({ category: categorySlug, topic: null });
      setTopics(fetchedTopics);
      setTags([]);
    } catch (error) {
      console.error("Error fetching topics:", error);
      setError("Failed to load topics.");
    }
  };

  const handleTopicClick = async (topicSlug: string) => {
    try {
      const fetchedTags = await getAllTags(topicSlug);
      setSelected((prev) => ({ ...prev, topic: topicSlug }));
      setTags(fetchedTags);
    } catch (error) {
      console.error("Error fetching tags:", error);
      setError("Failed to load tags.");
    }
  };

  if (isLoading) {
    return <p className="loading-message">Loading...</p>;
  }

  if (categories && categories.length === 0) {
    return <p className="empty-message">No categories available</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <section className="discover-menu">
      <h3 className="discover-menu-title">Discover</h3>
      {categories &&
        categories.map((category) => (
          <details
            key={category.id}
            open={selected.category === category.slug}
            className="collapsible-menu category-menu"
          >
            <summary
              className="collapsible-menu-summary category-summary"
              onClick={() => handleCategoryClick(category.slug)}
            >
              <li>
                <Link to={`/articles?tags=${category.slug}`} className="category-link">
                  {category.name}
                </Link>
              </li>
              <img src={caretSymbolPath} alt="Toggle category" className="toggle-icon" />
            </summary>
            <ul className="collapsible-menu-content topic-list">
              <summary className="collapsible-menu-summary topic-summary">
                <li>
                  <Link to={`/articles/category=${category.slug}`} className="context-link">
                    Browse all topics
                  </Link>
                </li>
              </summary>
              {selected.category === category.slug &&
                topics.map((topic) => (
                  <details
                    key={topic.id}
                    open={selected.topic === topic.slug}
                    className="collapsible-menu nested topic-menu"
                  >
                    <summary
                      className="collapsible-menu-summary topic-summary"
                      onClick={() => handleTopicClick(topic.slug)}
                    >
                      <li>
                        <Link to={`/articles?tags=${topic.slug}`} className="topic-link">
                          {topic.name}
                        </Link>
                      </li>
                      <img
                        src={caretSymbolPath}
                        alt="Toggle topic"
                        className="toggle-nested-icon"
                      />
                    </summary>
                    <ul className="collapsible-menu-content tag-list">
                      <summary className="collapsible-menu-summary topic-summary">
                        <li>
                          <Link to={`/articles/topic=${topic.slug}`} className="context-link">
                            Browse all tags
                          </Link>
                        </li>
                      </summary>
                      {selected.topic === topic.slug &&
                        tags.map((tag) => (
                          <li key={tag.id}>
                            <Link to={`/articles?tags=${tag.slug}`} className="context-link">
                              {tag.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </details>
                ))}
            </ul>
          </details>
        ))}
    </section>
  );
};

export default DiscoverMenu;
