/* @fwrlines/generator-react-component 2.8.0 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useSite } from 'ui/a'

const helmetMap = [
  {
    variables:['robots'],
    render   :(v) => (
      <meta
        name="robots"
        key="robots"
        content={v || '"index, follow"'}
      />
    ),
  },

  {
    variables:['title_tag', 'title'],
    render   :(v, c) => <title key="title_tag">{ v }{ C.SITE?.TITLE_SUFFIX && ` ${C.SITE.TITLE_SUFFIX}`}</title>,
  },

  {
    variables:['meta_description'],
    render   :(v) => (
      <meta
        name="description"
        content={v}
        key="meta_description"
      />
    ),
  },

  {
    variables:['canonical'],
    render   :(v, c) => (c.SITE?.CANONICAL
      ? (
        <link
          rel="canonical"
          href={`${c.SITE?.CANONICAL}${v}`}
          key="canonical"
        />
      )
      : (
        <link
          rel="canonical"
          href={v}
          key="canonical"
        />
      )),
  },

  {
    variables:['twitter_title', 'title', 'title_tag'],
    render   :(v) => (
      <meta
        name="twitter:title"
        content={v}
        key="twitter_title"
      />
    ),
  },

  {
    variables:['twitter_description', 'meta_description'],
    render   :(v) => (
      <meta
        name="twitter:description"
        content={v}
        key="twitter_description"
      />
    ),
  },

  {
    test     :true,
    variables:['twitter_image, main_image'],
    render   :(v) => (
      <meta
        name="twitter:image"
        content={v}
        key="twitter_image"
      />
    ),
  },

  {
    variables:['og_title', 'title', 'title_tag'],
    render   :(v) => (
      <meta
        property="og:title"
        content={v}
        key="og_title"
      />
    ),
  },
  {
    variables:['og_description', 'meta_description'],
    render   :(v) => (
      <meta
        property="og:description"
        content={v}
        key="og_description"
      />
    ),
  },

  {
    test     :true,
    variables:['og_image', 'main_image'],
    render   :(v) => (
      <meta
        property="og:image"
        content={v}
        key="og_image"
      />
    ),
  },

  {
    test     :true,
    variables:['og_type'],
    render   :(v) => (
      <meta
        property="og:type"
        content={v || 'article'}
        key="og_type"
      />
    ),
  },

  {
    variables:['og_url', 'canonical'],
    render   :(v, c) => (c.SITE?.CANONICAL
      ? (
        <meta
          property="og:url"
          content={`${c.SITE?.CANONICAL}/${v}`}
          key="og_url"
        />
      )
      : (
        <meta
          property="og:url"
          content={v}
          key="og_url"
        />
      )),
  },

]

const PageHelmet = ({
  ...props
}) => {
  // const intl = useIntl()
  const context = useSite()

  const HelmetContent = useMemo(() => helmetMap.reduce(
    /* eslint-disable no-unused-vars -- TODO add test or ssr mode */
    (a, { variables, render, test }) => {
    /* eslint-enable no-unused-vars */
      let current; let
        content = ''

      /* eslint-disable no-restricted-syntax -- we need to be able to break the loop */
      for (const key in variables) {
        if (props[variables[key]]) {
          content = props[variables[key]]
          break
        }
      }
      /* eslint-enable no-restricted-syntax */

      // TODO Add SSR mode
      // if ((typeof test === 'undefined') || (test && content.length)) {
      if (content.length) {
        // if content is an object, then its a message and we need to render it as a string first
        // const stringContent = typeof content === 'string' ? content : intl.formatMessage(content)
        // const stringContent = typeof content === 'string' ? content : intl.formatMessage(content)
        const stringContent = content
        // console.log(stringContent, content)
        current = render(stringContent, context)
      }

      if (current) {
        a.push(current)
      }

      return a
    },
    [],
  ),
  [props, context])

  return (
    <Helmet>
      { HelmetContent }
    </Helmet>

  )
}

PageHelmet.propTypes = {
  robots:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  title:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  title_tag:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  canonical:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  meta_description:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  main_image:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  twitter_title:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  twitter_description:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  twitter_image:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  og_title:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  og_description:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  og_image:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  og_type:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  og_url:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
}

export default PageHelmet
