<?php

namespace App\Resolver;

use GraphQL\Error\Error;
use GraphQL\Language\AST\StringValueNode;
use GraphQL\Type\Definition\ResolveInfo;
use Overblog\GraphQLBundle\Definition\ArgumentInterface;
use Overblog\GraphQLBundle\Resolver\ResolverMap;

//use Symfony\Component\HttpFoundation\JsonResponse;
use Overblog\GraphQLBundle\Error\UserError;
use App\Entity\Company;

use App\Repository\CompanyRepository;

class MyResolverMap extends ResolverMap
{
    //protected $em;
    protected $companyRepository;

    public function __construct(CompanyRepository $companyRepository)
    {
        $this->companyRepository = $companyRepository;
    }

    protected function map()
    {
        return [
            'Query' => [
                /*
                self::RESOLVE_FIELD => function ($value, ArgumentInterface $args, \ArrayObject $context, ResolveInfo $info) {
                  if ('company' === $info->fieldName) {
                      //$companies = Characters::getCharacters();
                      $id = (int) $args['id'];
                      return $this->companyRepository->find($id);
                  }

                    return null;
                },
                'companies' => function () {
                    return $this->companyRepository->findAll();
                },
                */
            ],
            'Mutation' => [
              /*
              'updateCompany' => function ($value, ArgumentInterface $args, \ArrayObject $context, ResolveInfo $info) {
                  //return $this->companyRepository->updateCompany("1", "Colorado Flowers", "http://www.coloradoflowers.com", "USA");
                  throw new UserError(sprintf('Could not find Company#%d', $args['id']));
                  //return new JsonResponse($response, JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
                  return $this->companyRepository->updateCompany($args['id'], $args['name'], $args['website'], $args['country']);
              }
              */
            ],

        ];
    }
}
