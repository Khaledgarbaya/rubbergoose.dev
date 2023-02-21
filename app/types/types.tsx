import { z } from "zod"

const PostSchema = z.object({
  post: z.object({
    metadata: z.object({ tags: z.array(z.unknown()) }),
    sys: z.object({
      space: z.object({
        sys: z.object({
          type: z.string(),
          linkType: z.string(),
          id: z.string()
        })
      }),
      id: z.string(),
      type: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      environment: z.object({
        sys: z.object({
          id: z.string(),
          type: z.string(),
          linkType: z.string()
        })
      }),
      revision: z.number(),
      contentType: z.object({
        sys: z.object({
          type: z.string(),
          linkType: z.string(),
          id: z.string()
        })
      }),
      locale: z.string()
    }),
    fields: z.object({
      title: z.string(),
      slug: z.string(),
      featureImage: z.object({
        metadata: z.object({ tags: z.array(z.unknown()) }),
        sys: z.object({
          space: z.object({
            sys: z.object({
              type: z.string(),
              linkType: z.string(),
              id: z.string()
            })
          }),
          id: z.string(),
          type: z.string(),
          createdAt: z.string(),
          updatedAt: z.string(),
          environment: z.object({
            sys: z.object({
              id: z.string(),
              type: z.string(),
              linkType: z.string()
            })
          }),
          revision: z.number(),
          locale: z.string()
        }),
        fields: z.object({
          title: z.string(),
          file: z.object({
            url: z.string(),
            details: z.object({
              size: z.number(),
              image: z.object({ width: z.number(), height: z.number() })
            }),
            fileName: z.string(),
            contentType: z.string()
          })
        })
      }),
      author: z.object({
        metadata: z.object({ tags: z.array(z.unknown()) }),
        sys: z.object({
          space: z.object({
            sys: z.object({
              type: z.string(),
              linkType: z.string(),
              id: z.string()
            })
          }),
          id: z.string(),
          type: z.string(),
          createdAt: z.string(),
          updatedAt: z.string(),
          environment: z.object({
            sys: z.object({
              id: z.string(),
              type: z.string(),
              linkType: z.string()
            })
          }),
          revision: z.number(),
          contentType: z.object({
            sys: z.object({
              type: z.string(),
              linkType: z.string(),
              id: z.string()
            })
          }),
          locale: z.string()
        }),
        fields: z.object({
          fullName: z.string(),
          bio: z.string(),
          twitter: z.string(),
          avatar: z.object({
            metadata: z.object({ tags: z.array(z.unknown()) }),
            sys: z.object({
              space: z.object({
                sys: z.object({
                  type: z.string(),
                  linkType: z.string(),
                  id: z.string()
                })
              }),
              id: z.string(),
              type: z.string(),
              createdAt: z.string(),
              updatedAt: z.string(),
              environment: z.object({
                sys: z.object({
                  id: z.string(),
                  type: z.string(),
                  linkType: z.string()
                })
              }),
              revision: z.number(),
              locale: z.string()
            }),
            fields: z.object({
              title: z.string(),
              description: z.string(),
              file: z.object({
                url: z.string(),
                details: z.object({
                  size: z.number(),
                  image: z.object({ width: z.number(), height: z.number() })
                }),
                fileName: z.string(),
                contentType: z.string()
              })
            })
          })
        })
      }),
      content: z.string()
    })
  })
})

const tutorialSchema = z.object({
  metadata: z.object({ tags: z.array(z.unknown()) }),
  sys: z.object({
    space: z.object({
      sys: z.object({ type: z.string(), linkType: z.string(), id: z.string() })
    }),
    id: z.string(),
    type: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    environment: z.object({
      sys: z.object({ id: z.string(), type: z.string(), linkType: z.string() })
    }),
    revision: z.number(),
    contentType: z.object({
      sys: z.object({ type: z.string(), linkType: z.string(), id: z.string() })
    }),
    locale: z.string()
  }),
  fields: z.object({
    title: z.string(),
    slug: z.string(),
    featureImage: z.object({
      metadata: z.object({ tags: z.array(z.unknown()) }),
      sys: z.object({
        space: z.object({
          sys: z.object({
            type: z.string(),
            linkType: z.string(),
            id: z.string()
          })
        }),
        id: z.string(),
        type: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        environment: z.object({
          sys: z.object({
            id: z.string(),
            type: z.string(),
            linkType: z.string()
          })
        }),
        revision: z.number(),
        locale: z.string()
      }),
      fields: z.object({
        title: z.string(),
        file: z.object({
          url: z.string(),
          details: z.object({
            size: z.number(),
            image: z.object({ width: z.number(), height: z.number() })
          }),
          fileName: z.string(),
          contentType: z.string()
        })
      })
    }),
    content: z.string(),
    author: z.object({
      metadata: z.object({ tags: z.array(z.unknown()) }),
      sys: z.object({
        space: z.object({
          sys: z.object({
            type: z.string(),
            linkType: z.string(),
            id: z.string()
          })
        }),
        id: z.string(),
        type: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        environment: z.object({
          sys: z.object({
            id: z.string(),
            type: z.string(),
            linkType: z.string()
          })
        }),
        revision: z.number(),
        contentType: z.object({
          sys: z.object({
            type: z.string(),
            linkType: z.string(),
            id: z.string()
          })
        }),
        locale: z.string()
      }),
      fields: z.object({
        fullName: z.string(),
        bio: z.string(),
        twitter: z.string(),
        avatar: z.object({
          metadata: z.object({ tags: z.array(z.unknown()) }),
          sys: z.object({
            space: z.object({
              sys: z.object({
                type: z.string(),
                linkType: z.string(),
                id: z.string()
              })
            }),
            id: z.string(),
            type: z.string(),
            createdAt: z.string(),
            updatedAt: z.string(),
            environment: z.object({
              sys: z.object({
                id: z.string(),
                type: z.string(),
                linkType: z.string()
              })
            }),
            revision: z.number(),
            locale: z.string()
          }),
          fields: z.object({
            title: z.string(),
            description: z.string(),
            file: z.object({
              url: z.string(),
              details: z.object({
                size: z.number(),
                image: z.object({ width: z.number(), height: z.number() })
              }),
              fileName: z.string(),
              contentType: z.string()
            })
          })
        })
      })
    }),
    tags: z.array(z.string())
  })
})

const tipSchema = z.object({
  metadata: z.object({ tags: z.array(z.unknown()) }),
  sys: z.object({
    space: z.object({
      sys: z.object({ type: z.string(), linkType: z.string(), id: z.string() })
    }),
    id: z.string(),
    type: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    environment: z.object({
      sys: z.object({ id: z.string(), type: z.string(), linkType: z.string() })
    }),
    revision: z.number(),
    contentType: z.object({
      sys: z.object({ type: z.string(), linkType: z.string(), id: z.string() })
    }),
    locale: z.string()
  }),
  fields: z.object({
    title: z.string(),
    slug: z.string(),
    featureImage: z.object({
      metadata: z.object({ tags: z.array(z.unknown()) }),
      sys: z.object({
        space: z.object({
          sys: z.object({
            type: z.string(),
            linkType: z.string(),
            id: z.string()
          })
        }),
        id: z.string(),
        type: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        environment: z.object({
          sys: z.object({
            id: z.string(),
            type: z.string(),
            linkType: z.string()
          })
        }),
        revision: z.number(),
        locale: z.string()
      }),
      fields: z.object({
        title: z.string(),
        file: z.object({
          url: z.string(),
          details: z.object({
            size: z.number(),
            image: z.object({ width: z.number(), height: z.number() })
          }),
          fileName: z.string(),
          contentType: z.string()
        })
      })
    }),
    content: z.string(),
    author: z.object({
      metadata: z.object({ tags: z.array(z.unknown()) }),
      sys: z.object({
        space: z.object({
          sys: z.object({
            type: z.string(),
            linkType: z.string(),
            id: z.string()
          })
        }),
        id: z.string(),
        type: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        environment: z.object({
          sys: z.object({
            id: z.string(),
            type: z.string(),
            linkType: z.string()
          })
        }),
        revision: z.number(),
        contentType: z.object({
          sys: z.object({
            type: z.string(),
            linkType: z.string(),
            id: z.string()
          })
        }),
        locale: z.string()
      }),
      fields: z.object({
        fullName: z.string(),
        bio: z.string(),
        twitter: z.string(),
        avatar: z.object({
          metadata: z.object({ tags: z.array(z.unknown()) }),
          sys: z.object({
            space: z.object({
              sys: z.object({
                type: z.string(),
                linkType: z.string(),
                id: z.string()
              })
            }),
            id: z.string(),
            type: z.string(),
            createdAt: z.string(),
            updatedAt: z.string(),
            environment: z.object({
              sys: z.object({
                id: z.string(),
                type: z.string(),
                linkType: z.string()
              })
            }),
            revision: z.number(),
            locale: z.string()
          }),
          fields: z.object({
            title: z.string(),
            description: z.string(),
            file: z.object({
              url: z.string(),
              details: z.object({
                size: z.number(),
                image: z.object({ width: z.number(), height: z.number() })
              }),
              fileName: z.string(),
              contentType: z.string()
            })
          })
        })
      })
    }),
    tags: z.array(z.string())
  })
})

export type Tip = z.infer<typeof tipSchema>
export type Tutorial = z.infer<typeof tutorialSchema>
export type Post = z.infer<typeof PostSchema>
