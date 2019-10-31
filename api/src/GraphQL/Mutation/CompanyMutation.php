<?php
# src/GraphQL/Mutation/CompanyMutation.php
namespace App\GraphQL\Mutation;

use Overblog\GraphQLBundle\Definition\Argument;
use Overblog\GraphQLBundle\Definition\Resolver\AliasedInterface;
use Overblog\GraphQLBundle\Definition\Resolver\MutationInterface;
use Overblog\GraphQLBundle\Validator\InputValidator;
use Overblog\GraphQLBundle\Error\UserError;
use App\Repository\CompanyRepository;
use App\Entity\Company;


class CompanyMutation implements MutationInterface, AliasedInterface
{
  private $companyRepository;

  public function __construct(CompanyRepository $companyRepository) {
      $this->companyRepository = $companyRepository;
  }

  /** -- resolves mutation for creating Company -- **/
  public function createCompany(Argument $args, InputValidator $validator): array
  {
      $validator->validate();

      $company = new Company();
      $company->setName($args['name']);
      $company->setWebsite($args['website']);
      $company->setCountry($args['country']);

      $this->companyRepository->saveCompany($company);

      return [
          'id' => $company->getId(),
          'name'    => $company->getName(),
          'website' => $company->getWebsite(),
          'country' => $company->getCountry(),
      ];


  }

  /** -- resolves mutation for updating Company -- **/
  public function updateCompany(Argument $args, InputValidator $validator): array
  {
      $company = $this->companyRepository->find($args['id']);
      if ($company === null) {
        throw new UserError(sprintf('Could not find Company#%d', $args['id']));
      }

      $validator->validate();

      $company->setName($args['name']);
      $company->setWebsite($args['website']);
      $company->setCountry($args['country']);


      $this->companyRepository->saveCompany($company);

      return [
          'id'      => $company->getId(),
          'name'    => $company->getName(),
          'website' => $company->getWebsite(),
          'country' => $company->getCountry()
      ];
  }

  /** -- resolves mutation for removing Companies -- **/
  public function deleteCompanies(Argument $args): array
  {
      /*-- $args['Ids'] is an array with id's of companies to remove, e.g [2, 5, 10 .. etc]  -- */
      $Ids = $args['Ids'];

      foreach ($Ids as $id) {
          $company = $this->companyRepository->find($id);
          if ($company) {
            $this->companyRepository->deleteCompany($company);
          }

      }

      return ["result" => "SUCCESS"];

  }


    /**
     * {@inheritdoc}
     */
    public static function getAliases(): array
    {
          // `create_company` is the name of the mutation that should be useed inside types definition
          // `createCompany` is the method that will be executed when calling `@=resolver('create_company')`
        return [
          'createCompany' => 'create_company',
          'updateCompany' => 'update_company',
          'deleteCompanies' => 'delete_companies'
        ];
    }
}
