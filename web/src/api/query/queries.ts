import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { request, gql } from "graphql-request";
import { FormPost, TPost } from "../../common/interfaces";

const endpoint = "http://localhost:5000/graphql";

export const useGetPostList = () => {
    return useQuery(["GET_POSTS"], async (): Promise<TPost[]> => {
        const {getAllPosts} = await request(
            endpoint,
            gql`
              query {
                getAllPosts {
                    username, id, article, title, timestamp
                }
              }
            `
          );
          return getAllPosts;
    })
}


export const useMutationAddPost = () => {
    const queryClient = useQueryClient()
    return useMutation((values: FormPost) => request(
            endpoint,
            gql`
              mutation createPost($username: String!, $title: String!, $article: String! ){
                createPost(input: {username: $username, title: $title, article: $article}) {
                    username, id, title
                },
              }
            `,
            values
          ),
          {
            onSettled: () => {
              queryClient.invalidateQueries(["GET_POSTS"])
            }
          }
    )
    
}

export const useMutationRemovePost = () => {
    const queryClient = useQueryClient()
    return useMutation((id: string) => request(
            endpoint,
            gql`
              mutation removePost($id: ID!){
                removePost(id: $id) {
                  id
                }
              }
            `,
            {id}
          ),
          {
            onSettled: () => {
              queryClient.invalidateQueries(["GET_POSTS"])
            }
          }
    )
    
}
