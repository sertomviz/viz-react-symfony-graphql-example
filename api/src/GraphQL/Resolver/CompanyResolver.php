<?php
# src/GraphQL/Resolver/CompanyResolver.php
namespace App\GraphQL\Resolver;

use Overblog\GraphQLBundle\Definition\Resolver\AliasedInterface;
use Overblog\GraphQLBundle\Definition\Resolver\ResolverInterface;
use App\Repository\CompanyRepository;

class CompanyResolver implements ResolverInterface, AliasedInterface
{
    private $companyRepository;

    public function __construct(CompanyRepository $companyRepository) {
        $this->companyRepository = $companyRepository;
    }

    public function getCompany($id)
    {
        return $this->companyRepository->find($id);
    }

    public function getCompannies()
    {
        return $this->companyRepository->findAll();
    }


    /**
     * {@inheritdoc}
     */
    public static function getAliases(): array
    {
        return [
          'getCompany' => 'get_company',
          'getCompannies' => 'get_companies'
        ];
    }
}
